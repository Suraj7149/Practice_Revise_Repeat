from PyQt5.QtCore import Qt
from PyQt5.QtGui import QIcon, QPalette
from PyQt5.QtWidgets import QApplication, QWidget
from PyQt5.QtCore import Qt
from PyQt5.QtMultimedia import QMediaPlayer, QMediaContent
import sys

class Window(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowIcon(QIcon("player.ico"))
        self.setWindowTitle("Py_Player")
        self.setGeometry(330, 165, 1280, 720)

        p = self.palette()
        p.setColor(QPalette.window,  Qt.red)
        self.setPalette(p) 

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = Window()
    window.show()
    sys.exit(app.exec_())