import unittest
import Logging_in_python as Calc


class TestCalc(unittest.TestCase):
    def test_add(self):
        try :
            # self.assertEqual(result, 15)
            # self.assertEqual(Calc.add(10, 5), 14)
            self.assertEqual(Calc.add(10, 5), 15)
            self.assertEqual(Calc.add(-1, 1), 0)
            self.assertEqual(Calc.add(-1, -1), -2)
        except Exception as exc:
            print(f"\n\nFailed with Error: {exc}")
        else:
            print("\nProgram executed sucessfully.")



    def test_subtract(self):
        try :
            # self.assertEqual(result, 15)
            # self.assertEqual(Calc.add(10, 5), 14)
            self.assertEqual(Calc.subtract(10, 5), 5)
            self.assertEqual(Calc.subtract(-1, 1), -2)
            self.assertEqual(Calc.subtract(-1, -1), 0)
        except Exception as exc:
            print(f"\n\nFailed with Error: {exc}")
        else:
            print("\nProgram executed sucessfully.")



    def test_multiply(self):
        try :
            # self.assertEqual(result, 15)
            # self.assertEqual(Calc.add(10, 5), 14)
            self.assertEqual(Calc.multiply(10, 5), 50)
            self.assertEqual(Calc.multiply(-1, 1), -1)
            self.assertEqual(Calc.multiply(-1, -1), 1)
        except Exception as exc:
            print(f"\n\nFailed with Error: {exc}")
        else:
            print("\nProgram executed sucessfully.")
        

if __name__ == "__main__":
    unittest.main()