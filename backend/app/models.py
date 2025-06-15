from pydantic import BaseModel

class EmailTextRequest(BaseModel):
    emailText: str

class ReceiptResponse(BaseModel):
    donorName: str
    amount: float
    date: str
    paymentMethod: str
    transactionId: str
    charityName: str
    charityNumber: str
    receiptNumber: str = "AUTO-GENERATED"
