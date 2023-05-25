import sqlite3
import random

def main():
    # Connect to the database
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()

    # check if table exists
    cur.execute('SELECT * FROM sqlite_master WHERE type="table" AND name="PARKING_LOT"')
    if cur.fetchone() is None:
        # Create the table
        cur.execute('CREATE TABLE PARKING_LOT (id INTEGER PRIMARY KEY, floor INTEGER, number TEXT, isactive boolean)')
    else:
        print("Table exists")

    # Check if table is empty if not then clean it
    cur.execute('DELETE FROM PARKING_LOT')

    # Generate the data
    # 75 rows
    for i in range(75):
        cur.execute('INSERT INTO PARKING_LOT (floor, number, isactive) VALUES (?, ?, ?)', (1, str(i) + 'A', random.choice([True, False])))
        cur.execute('INSERT INTO PARKING_LOT (floor, number, isactive) VALUES (?, ?, ?)', (2, str(i) + 'B', random.choice([True, False])))

    # Commit the changes
    conn.commit()


if __name__ == '__main__':
    main()
