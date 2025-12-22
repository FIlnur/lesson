from typing import List, Optional
from sqlalchemy import DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import DeclarativeBase, Mapped
from sqlalchemy.orm import mapped_column, relationship

class Base(DeclarativeBase):
    id: Mapped[int] = mapped_column(primary_key=True)

class User(Base):
    __tablename__ = "users"
    username: Mapped[str] = mapped_column(String(50))
    password: Mapped[str] = mapped_column(String(25))
    comments: Mapped[List["Comment"]] = relationship(back_populates="user")


class Post(Base):
    __tablename__ = "posts"
    content: Mapped[Optional[str]] = mapped_column(Text)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    comments: Mapped[List["Comment"]] = relationship(back_populates="post")
    publication_date: Mapped[str] = DateTime
    likes: Mapped[List["Like"]] = relationship(back_populates="post")

class Comment(Base):
    __tablename__ = "comments"
    text: Mapped[str] = mapped_column(String(255))
    post_id: Mapped[int] = mapped_column(ForeignKey("posts.id"))
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    post: Mapped["Post"] = relationship(back_populates="comments")
    user: Mapped["User"] = relationship(back_populates="comments")

class Like(Base):
    __tablename__ = "likes"
    post_id: Mapped[int] = mapped_column(ForeignKey("posts.id"))
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    post: Mapped["Post"] = relationship(back_populates="likes")
    user: Mapped["User"] = relationship(back_populates="post")