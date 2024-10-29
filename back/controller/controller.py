
from back.controller import repository

class controller():

    def __init__(self, db_session):
        self.db_session = db_session

    def get_db_session(self):
        db = self.db_session
        try:
            yield db
        finally:
            db.close()

    def get_all_tasks(self):
        db = next( self.get_db_session )
        return repository.get_all_tasks(db)

    def add_task(self, task):
        db = next( self.get_db_session )
        return repository.add_task(db, task)

    def delete_task(self, task_id):
        db = next( self.get_db_session )
        return repository.delete_task(db, task_id)

    def update_task(self, task_id):
        db = next( self.get_db_session )
        return repository.update_task(db, task_id)