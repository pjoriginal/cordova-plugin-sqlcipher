// const sqlite3 = window.require('@journeyapps/sqlcipher').verbose();
// const envPaths = window.require('env-paths');
// const makeDir = window.require('make-dir');

module.exports = {
    createElectronDB: function () {
        console.log('test');
        return true;
        // return new Promise(async (resolve, reject) => {
        //     console.log('test');
        //     resolve('test')
        //     return;
        //     const paths = envPaths('NameOfTheApp');
        //     const path = await makeDir(paths.data);

        //     const dbFilename = `${path}/NameOfTheApp.db`;
        //     Logger.info('DB Filename', dbFilename);
        //     const db = new sqlite3.Database(dbFilename);

        //     db.serialize(() => {
        //         db.run('PRAGMA cipher_compatibility = 3');
        //         db.run(
        //             "PRAGMA key = '...'",
        //         );

        //         resolve(db);
        //     });

        //     db.transaction = function() {
        //         return Promise.resolve({
        //             executeSql: ([[sql, parameters]]) => {
        //                 db.serialize(() => {
        //                     try {
        //                         if (sql.toLowerCase().startsWith('select')) {
        //                             /* eslint-disable func-names, prefer-arrow-callback */
        //                             const stmt = db.prepare(sql, parameters, function () {
        //                                 stmt.all([], function (err, values) {
        //                                     if (err) {
        //                                         reject(err);
        //                                     }
        //                                     const resultSet = {
        //                                         rows: {
        //                                             length: values.length,
        //                                             item: (index) => values[index],
        //                                         },
        //                                         insertId: -1,
        //                                         rowsAffected: -1,
        //                                     };
        //                                     resolve(resultSet);
        //                                 });
        //                             });
        //                             return;
        //                         }
        //                         /* eslint-disable func-names, prefer-arrow-callback */
        //                         db.run(sql, ...parameters, function (err) {
        //                             if (err) {
        //                                 reject(err);
        //                                 return;
        //                             }
        //                             const resultSet = {
        //                                 rows: {
        //                                     length: 0,
        //                                     item: (index) => undefined,
        //                                 },
        //                                 // @ts-ignore
        //                                 insertId: this.lastID,
        //                                 // @ts-ignore
        //                                 rowsAffected: this.changes,
        //                             };
        //                             resolve(resultSet);
        //                         });
        //                     } catch (e) {
        //                         Logger.error(e);
        //                         reject(e);
        //                     }
        //                 });
        //             },
        //         });
        //     };
        // });
    }
}
