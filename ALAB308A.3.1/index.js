// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  try {
    // step one find users in the databse using cnetral
    const getDatabase = await central(id);
    console.log(getDatabase);
    // step 2 user basic info
    const basicInfo = await dbs[getDatabase](id);
    console.log(basicInfo);
    // step 3 access to vaul an steal persnal data
    const personalData = await vault(id);
    console.log(personalData);

    return {
      id,
      ...getDatabase,
      ...personalData,
    };
  } catch (error) {
    return Promise.reject(`Error: ${error.message}`);
  }
}
const user = await getUserData(6);
console.log(user);

// import { central, db1, db2, db3, vault } from "./databases.js";

// async function getUserData(id) {
//   const dbs = { db1, db2, db3 };

//   try {
//     // Get the database name and user data concurrently
//     const [getDatabase, vaultData] = await Promise.all([central(id), vault(id)]);

//     // Get user data from the appropriate database
//     const dbData = await dbs[getDatabase](id);

//     // Combine the data
//     return {
//       id,
//       ...vaultData,
//       ...dbData,
//     };
//   } catch (error) {
//     return Promise.reject(`Error: ${error.message}`);
//   }
// }
