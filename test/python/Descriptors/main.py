#todo: fix bugs

import requests

class APIField:
    def __init__(self, url, key):
        self.url = url
        self.key = key

    def __get__(self, obj, objtype=None):
        r = requests.get(obj.url())
        r.raise_for_status()
        return r.json()[self.key]

class Person:
    name = APIField('name')

    def __init__(self, id):
        self.id = id

    def url(self):
        return f'https://swapi.co/api/people/{id}/'

p = Person(3)
print(p.name)