from sqlalchemy.engine import URL
import socket

CONNECTION_URL = URL.create(
    'myFirstSqlReactApp',
    host= f'{ socket.gethostname() }\FIRSTSQLSERVER',
    database='test',
    query={
        "driver": 'ODBC Driver 17for SQL Server',
        "TrustServerCertificate": 'yes',
        "username": 'sa',
        "password": 'test2024sql',
    }
)