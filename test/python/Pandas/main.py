import pandas as pd, numpy as np

mydataset = {
  'cars': ["BMW", "Volvo", "Ford"],
  'passings': [3, 7, 2]
}

df1 = pd.DataFrame(mydataset)

print(df1)
print("\n"*2)

df2 = pd.DataFrame(data=[np.arange(10), np.arange(10) * 2])

print(df2)