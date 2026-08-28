import sqlite3

def check():
    for path in ["pillsync.db", "../pillsync.db"]:
        try:
            conn = sqlite3.connect(path)
            c = conn.cursor()
            tables = [r[0] for r in c.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall()]
            print(f"--- {path} ---")
            for t in tables:
                cols = [col[1] for col in c.execute(f"PRAGMA table_info({t})").fetchall()]
                print(f"{t}: {cols}")
            conn.close()
        except Exception as e:
            print(f"Error {path}: {e}")

if __name__ == "__main__":
    check()
