import random
import math
def get_random_ts_code():
    operators = ["+", "-", "*", "/"]
    numbers = [1, 2, 3, 4, 5]
    operator = random.choice(operators)
    num1 = random.choice(numbers)
    num2 = random.choice(numbers)
    result = eval(f"{num1} {operator} {num2}")
    return f"{num1} {operator} {num2} = {result}"