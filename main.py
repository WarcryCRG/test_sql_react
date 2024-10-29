import webview
import sqlalchemy
from sqlalchemy.orm import sessionmaker

from setting import CONNECTION_URL

def main():

    engine = sqlalchemy.create_engine(CONNECTION_URL)
    session = sessionmaker(autocommit=False, autoflush=False, bind=engine)


    webview.create_window('Test_sql_react', url='front/index.html', width='1200')
    webview.start(debug=True)


if __name__ == '__main__':
    main()