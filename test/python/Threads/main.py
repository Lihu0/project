from threading import Thread, Lock
from time import sleep

class Task(Thread):
    def __init__(self):
        super().__init__()
        self.lock = Lock()

    def run(self):
        import Task

def main():
    t = Task()
    t.start()
    print(7)

if __name__ == "__main__":
    main()