from back.controller.repository import repository 
from back.model.task import task 

def get_all_tasks(db):
    return db.query(task).all()

def add_task(db, task):
    new_task = Task(
        name                                                                                                                                         ¡                                                                                                               = task.name,
        description = task.description
    )
    return db.query(task)

def delete_task(db, task_id):
    db = next( db.get_db_session )
    return repository.delete_task(db, task_id)

def update_task(db, task_id):
    db = next( db.get_db_session )
    return repository.update_task(self, task_id)