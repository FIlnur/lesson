from typing import List, Optional
from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import DeclarativeBase, Mapped
from sqlalchemy.orm import mapped_column, relationship

class Base(DeclarativeBase):
    id: Mapped[int] = mapped_column(primary_key=True)

class Product(Base):
    __tablename__ = "products"
    # product_id: Mapped[int] = mapped_column(primary_key=True) #Mapped -соеденить поле с питоном
    name: Mapped[str] = mapped_column(String(255))
    # description: Mapped[str] = mapped_column(String(255), nullable=False)
    price: Mapped[float] = mapped_column(nullable=False)
    quantity: Mapped[int] = mapped_column(nullable=False)
    category_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("categories.id", ondelete="cascade"))
    category: Mapped["Category"] = relationship(
        back_populates="products")

class Category(Base):
    __tablename__ = "categories"
    name: Mapped[str] = mapped_column()
    name: Mapped[str] = mapped_column(String(255))
