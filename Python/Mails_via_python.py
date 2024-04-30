import smtplib
import os

Email_address = os.environ.get("Email_user")
Email_password = os.environ.get("Email_pass")

with smtplib.SMTP("santoshsuraj7149@gmail.com", 587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()

    smtp.login(Email_address, Email_password) 

    subject = "Hello, I am a Email sent using python."
    body = "This email has been sent using python. Please do not respond"

    msg = f'Subject: {subject}\n\n{body}'

    smtp.sendmail("santoshsuraj7149@gmail.com", "sunlightgod7755@gmail.com", msg)