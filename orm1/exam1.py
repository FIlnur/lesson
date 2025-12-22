from sqlalchemy import (
    Text,
    create_engine,
    insert,
    select
)
from sqlalchemy.orm import sessionmaker

from exam import Comment, User 

engine = create_engine('sqlite://db.db')#'postgresql://postgres:admin@localhost/p51_exam')

cerate_session =sessionmaker(bind=engine)

with cerate_session() as session:
    user = User()
    text = Text
    session.execute(
        insert(Comment)
    )
    p = Comment()
    session
    print(p.id)
    # session.commit()
    print(session.scalars(select(Comment).limit(1)).first().name)
    