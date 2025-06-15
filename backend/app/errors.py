from fastapi import HTTPException

def raise_field_error(field: str):
    raise HTTPException(status_code=400, detail=f"Missing or invalid field: {field}")
