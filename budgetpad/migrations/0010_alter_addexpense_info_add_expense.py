# Generated by Django 4.2.1 on 2023-06-12 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budgetpad', '0009_rename_category_addexpense_info_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addexpense_info',
            name='add_expense',
            field=models.CharField(max_length=10),
        ),
    ]
