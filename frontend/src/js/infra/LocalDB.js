let LocalDB = {
    dbName: import.meta.env.VITE_LOCAL_STORAGE_DB_NAME,
    data: false,
    saveData(){
      localStorage.setItem(this.dbName, JSON.stringify(this.data));
    },
    loadData(){
        if(localStorage[this.dbName]) this.data = JSON.parse(localStorage[this.dbName]);
        else this.data = false;
    },
    eraseData(){
      this.data = false;
      localStorage.removeItem(this.dbName);
    },
}

LocalDB.loadData();

export default LocalDB;