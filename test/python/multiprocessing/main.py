from multiprocessing import Pool

def isprime(num):
    if num < 2:
        return None
    for i in range(2, num):
         if (num % i) == 0:
            return None
    else:
        return num

def main():
    pool = Pool()
    result = list(filter(lambda x: x is not None, pool.map(isprime, range(0,30))))
    return result

if __name__ == "__main__":
    print(main())