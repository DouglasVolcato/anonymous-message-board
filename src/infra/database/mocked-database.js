// reply:{
//     _id: string
//     text: string
//     delete_password: string
//     created_on: date
//     bumped_on: date
//     reported: boolean
// }

// thread: {
//     _id: string
//     text: string
//     delete_password: string
//     reported: boolean
//     created_on: date
//     bumped_on: date
//     replies: string[]  - reply id
// }

// board: {
//     _id: string
//     name: string
//     threads: string[] - thread id
// }

module.exports = mockedDatabase = {
  boards: [],
};
