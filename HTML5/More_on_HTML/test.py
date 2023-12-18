def modifyArray(array):
    modified_array = []
    for element in array:
        if element > 0:
            modified_array.append(element*2)
    return modified_array


arr = [1, 2, -1, 0, 7]
result = modifyArray(arr)
print(*result)