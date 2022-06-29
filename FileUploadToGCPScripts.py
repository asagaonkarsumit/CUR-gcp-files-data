from os import walk
from random import randint
from flask_caching import Cache
from flask import Flask
import os
from os import walk

try:
    from google.cloud import storage
    import google.cloud.storage
    import json
    import os
    import sys
except Exception as e:
    print("Error : {} ".format(e))


print('abspath:     ', os.path.abspath(__file__))
print('abspath:     ', os.getcwd())


path = os.getcwd() + '\keyFolder'
KEY_FILE_lOCATION = ''
if os.path.isdir(path):
    get = os.listdir('keyFolder')

    KEY_FILE_lOCATION = KEY_FILE_lOCATION + str(get[0])
dir_location = os.getcwd()
PATH = os.path.join(dir_location, KEY_FILE_lOCATION)
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = PATH

storage_client = storage.Client(PATH)
print(storage_client)
bucket = storage_client.get_bucket('cur-layout-dev-data')

# filename = [filename.name for filename in list(bucket.list_blobs(prefix=''))]
# print(filename)
# blop = bucket.blob(blob_name='index3.html').download_as_string()
# for i in range(4, 11):
#     str = f'layout_D_{i}.html'
#     blob2 = bucket.blob(f'layout/four/{str}')
#     mango = os.getcwd()
#     mango = mango + "\\layout\\four\\"
#     blob2.upload_from_filename(filename=f'{mango}{str}')
#     print(blob2)
mypath = os.getcwd()+"\\fileupload\\"
f = []
for (dirpath, dirnames, filenames) in walk(mypath):
    print("this is the neww fidld\n")

    print(filenames)
    for name in filenames:

        blob2 = bucket.blob(
            f'test1/{name}')
        # print(f"{dirpath}\{name}")
        blob2.upload_from_filename(
            filename=f'{dirpath}\{name}')

        # blob2.upload_from_filename(
        #     filename=f'{mypath}{name}', content_type="text/html")
        # blob2.cache_control = 'no-cache'
        # blob2.max_age = 1
        print(blob2.public_url)
        # print(blob2)

    f.extend(filenames)
