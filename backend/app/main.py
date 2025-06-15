from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models import EmailTextRequest, ReceiptResponse
from app.parser import parse_email
from app.utils import normalize_text

app = FastAPI(title="Email receipt parser api")

origins = [
    "http://localhost:3000",
]

#Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

@app.post("/parse-email", response_model=ReceiptResponse)
def parse_email_endpoint(data: EmailTextRequest):
    return parse_email(normalize_text(data.emailText))
