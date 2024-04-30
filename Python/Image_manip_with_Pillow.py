from PIL import Image, ImageFilter
import os

# size_700 = (700, 700)
# for i in os.listdir("."):
#     if i.endswith(".png"):
#         image = Image.open(i)
#         fn, fext = os.path.splitext(i)
#         # image.save('pngs/{}.png'.format(fn))
#         image.thumbnail(size_700)
#         image.save('700/{}_700{}'.format(fn, fext))

image1  = Image.open("C:\\Users\\santo\\OneDrive\\Documents\\Prac, Rev and Rep\\Python\\Steam_dp.png")
# image1.show()
#image1.save("Steam_profile_picture.png")

image1.filter(ImageFilter.GaussianBlur(15)).save("Steam_dp_mod.png")
image1.show()
