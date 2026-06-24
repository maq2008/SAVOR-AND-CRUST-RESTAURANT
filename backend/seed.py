import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from api.models import MenuItem

items = [
    {'name': 'Grilled Salmon', 'description': 'Fresh Atlantic salmon with lemon butter sauce, served with seasonal vegetables and herbed rice.', 'price': 28.99, 'category': 'main_course', 'image': '', 'is_special': True},
    {'name': 'Beef Tenderloin Steak', 'description': 'Prime-cut tenderloin cooked to perfection with truffle mash and red wine jus.', 'price': 34.99, 'category': 'main_course', 'image': '', 'is_special': True},
    {'name': 'Truffle Mushroom Risotto', 'description': 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan.', 'price': 22.99, 'category': 'main_course', 'image': '', 'is_special': False},
    {'name': 'Chicken Alfredo Pasta', 'description': 'Fettuccine tossed in creamy alfredo sauce with grilled chicken breast and garlic bread.', 'price': 19.99, 'category': 'main_course', 'image': '', 'is_special': False},
    {'name': 'Bruschetta Trio', 'description': 'Classic tomato basil, mushroom truffle, and roasted pepper bruschetta on artisan bread.', 'price': 12.99, 'category': 'appetizers', 'image': '', 'is_special': False},
    {'name': 'Crispy Calamari', 'description': 'Lightly battered calamari rings with spicy marinara and lemon aioli dipping sauces.', 'price': 14.99, 'category': 'appetizers', 'image': '', 'is_special': False},
    {'name': 'Caesar Salad', 'description': 'Romaine lettuce, crunchy croutons, parmesan shavings, and our house-made Caesar dressing.', 'price': 11.99, 'category': 'appetizers', 'image': '', 'is_special': False},
    {'name': 'Tiramisu', 'description': 'Classic Italian tiramisu with mascarpone, espresso-soaked ladyfingers, and cocoa dusting.', 'price': 9.99, 'category': 'desserts', 'image': '', 'is_special': True},
    {'name': 'Chocolate Lava Cake', 'description': 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.', 'price': 10.99, 'category': 'desserts', 'image': '', 'is_special': False},
    {'name': 'Mango Cheesecake', 'description': 'Creamy mango-infused cheesecake on a graham cracker crust with mango coulis.', 'price': 9.99, 'category': 'desserts', 'image': '', 'is_special': False},
    {'name': 'Fresh Lemonade', 'description': 'Housemade lemonade with fresh-squeezed lemons and a hint of mint.', 'price': 4.99, 'category': 'beverages', 'image': '', 'is_special': False},
    {'name': 'Signature Mojito', 'description': 'Refreshing mint mojito with lime, soda, and our special twist.', 'price': 6.99, 'category': 'beverages', 'image': '', 'is_special': False},
]

for item in items:
    MenuItem.objects.get_or_create(name=item['name'], defaults=item)

print(f"Seeded {MenuItem.objects.count()} menu items")