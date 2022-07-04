class Point:

    __slots__ = ['x', 'y']

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self,other):
        if isinstance(other, Point):
            return self.x == other.x and self.y == other.y
        else:
            return NotImplemented

    def __ne__(self, other):
        return not self == other

    def __hash__(self):
        return hash(self.x) & hash(self.y)

p = Point(x=10, y=20)
q = Point(x=10, y=20)
p_1 = Point(x=10, y=30)

print("p isn't q" if p != q else "p = q")
print("p is q" if p is q else "f")
print("t" if p == 10 else "f")
print('\n')

print("p isn't p_1" if p != p_1 else "p = p_1")
print("p is p_1" if p is p_1 else "f")
print("t" if p == 10 else "f")

try:
    p.z = 10
    
except:
    print()
