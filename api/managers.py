from django.db import models, transaction
from django.db.models import F, Max


def reset_number_series(queryset):
    num = 1
    for item in queryset:
        item.order = num
        num = num + 1
        yield item


class StepManager(models.Manager):
    """ Manager to encapsulate bits of business logic """

    def move(self, obj, new_order):
        """ Move an object to a new order position """
        obj = self.only('id', 'order').get(id=obj)
        new_order = new_order
        qs = self.get_queryset()
        with transaction.atomic():
            if obj.order > int(new_order):
                qs.filter(
                    order__lt=obj.order,
                    order__gte=new_order,
                ).exclude(
                    pk=obj.pk
                ).update(
                    order=F('order') + 1,
                )
            else:
                qs.filter(
                    order__lte=new_order,
                    order__gt=obj.order,
                ).exclude(
                    pk=obj.pk,
                ).update(
                    order=F('order') - 1,
                )

            obj.order = new_order
            obj.save()

    def swap(self, obj, swap_with):
        """ Swap an object with another order position """
        obj = self.only('id', 'order').get(id=obj)
        swap_with = self.only('id', 'order').get(id=swap_with)
        with transaction.atomic():
            obj_value = obj.order
            swap_value = swap_with.order
            obj.order, swap_with.order = swap_value, obj_value
            obj.save()
            swap_with.save()

    def reset_order(self):
        """ Reset order position """
        qs = self.get_queryset()
        update_list = list(reset_number_series(qs))
        with transaction.atomic():
            qs.bulk_update(update_list, ['order'])

    def create(self, **kwargs):
        instance = self.model(**kwargs)

        with transaction.atomic():
            # Get our current max order number
            results = self.filter(
                task=instance.task
            ).aggregate(
                Max('order')
            )

            # Increment and use it for our new object
            current_order = results['order__max']
            if current_order is None:
                current_order = 0

            value = current_order + 1
            instance.order = value
            instance.save()

            return instance
