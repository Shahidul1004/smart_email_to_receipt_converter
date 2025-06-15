import re
from app.errors import raise_field_error

def extract_field(pattern: str, text: str, field_name: str, cast=lambda x: x):
    match = re.search(pattern, text, re.IGNORECASE)
    if not match:
        raise_field_error(field_name)
    try:
        return cast(match.group(1).strip())
    except:
        raise_field_error(field_name)

def parse_email(raw_text: str):
    raw_text = re.sub(r'\s+', ' ', raw_text).strip()

    donor_name = extract_field(r"\b(?:hi|hello)\s+(.*?),", raw_text, 'donorName')
    amount = extract_field(r"Amount\s*:?\s*\$?([0-9,.]+)", raw_text, "amount")
    date = extract_field(r"Date\s*:?\s*([A-Za-z]+\s\d{1,2},\s\d{4}|\d{1,2}[./]\d{1,2}[./]\d{4})", raw_text, "date")
    payment_method = extract_field(r"Payment Method\s*:?\s*([A-Za-z ]+)", raw_text, "paymentMethod")
    transaction_id = extract_field(r"Transaction ID\s*:?\s*([\w\-]+)", raw_text, "transactionId")
    charity_name = extract_field(r"Charity Name\s*:?\s*([\w\s]+)", raw_text, "charityName")
    charity_number = extract_field(r"Charity Number\s*:?\s*([\w\d]+)", raw_text, "charityNumber")

    return {
        "donorName": donor_name,
        "amount": amount,
        "date": date,
        "paymentMethod": payment_method,
        "transactionId": transaction_id,
        "charityName": charity_name,
        "charityNumber": charity_number,
        "receiptNumber": "AUTO-GENERATED"
    }
