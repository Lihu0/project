func_type: type = type(lambda x:x)

def debug(f: func_type):
    def wrapper(*args, **kwargs):
        print("\ndebug:")
        print(f"---Got arguments: {args}; {kwargs}---")
        res = f(*args, **kwargs)
        print(f"--- returun value: {res}---")
        print("output:")
        return res
    return wrapper

@debug
def twice(x):
    return x * 3

@debug
def my_func(x, y):
    return x * 2 + y

print(twice(10))
print(my_func(20, 30))