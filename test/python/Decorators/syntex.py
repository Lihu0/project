func_type: type = type(lambda x:x)
num: int = 10

def do_in_matrix(f: func_type):
    def wrapper(size: int):
        for i in range(1, size + 1):
            for j in range(1, size + 1):
                print(f'{f(i, j)}', end='')
            print()
    return wrapper

@do_in_matrix
def matrix_sum(i, j):
    return f'{i + j:5}'

@do_in_matrix
def matrix_mul(i, j):
    return f'{i * j:5}'

matrix_sum(num)
print('-' * num * 5 + '----')
matrix_mul(num)