import TaskModel from "../models/task.js";

let tasks = [];



const CREATE_TASK =async (req, res) => {

  try {
    const task = new TaskModel({
      title: req.body.title,
      raiting:req.body.raiting.toString(),
      description:req.body.description,
      imdbLink:req.body.imdbLink,
      realeseYear: req.body.realeseYear,toString,
    });

    const response = await task.save();
    
    return res
      .status(201)
      .json({ status: "Task was created", response: response });
  } catch (err) {
    console.log("HANDLED ERROR: ", err);
    return res.status(500).json({ message: "error happend" });
  }
};




// pakei

const GET_ALL_TASKS =async (req, res) => {

try {
  const tasks = await TaskModel.find();
  return res.json({ tasks: tasks });
} catch (err) {
  console.log("HANDLED ERROR: ", err);
  return res.status(500).json({ message: "error happend" });
}
};

const GET_TASK_BY_ID = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.id);
    return res.status(200).json({ task: task });
  } catch (err) {
    console.log("HANDLED ERROR: ", err);
    return res.status(500).json({ message: "error happend" });
  }
};


const UPDATE_TASK_BY_ID = async (req, res) => {
  try {
    const task = await TaskModel.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    return res.status(200).json({ message: "updated", task: task });
  } catch (err) {
    console.log("HANDLED ERROR: ", err);
    return res.status(500).json({ message: "error happend" });
  }
};

  const DELETE_TASK_BY_ID = async (req, res) => {
    try {
      const task = await TaskModel.findByIdAndDelete(req.params.id);
   
      if (!task) {
        return res.status(404).json({ message: "task not exist" });
      }
   
      return res.status(200).json({ message: "DELETED", task: task });
    } catch (err) {
      console.log("HANDLED ERROR: ", err);
      return res.status(500).json({ message: "error happend" });
    }
  };


/*const GET_TASKS_BY_RAITING =async(req, res)=>{
  try {const sorted=await TaskModel.sortByRating(b,a);
    return res.status(200).json({ sorted: sorted });
} 
catch (err) {
  console.log("HANDLED ERROR: ", err);
  return res.status(500).json({ message: "error happend" });
}

};*/
const GET_TASKS_LIMITED=async(req,res)=>{
try {  const tasks=await TaskModel.findByRaiting(req.params.raiting);
 const limited= tasks.slice(1,6)
    return res.json({limited:limited})}
  catch (err) {
    console.log("HANDLED ERROR: ", err);
    return res.status(500).json({ message: "error happend" });
  }
}

const GET_PAGINATED_TASKS =async (req, res) => {
const pageSize=3;
//const page=Number(req.params.page)
  try {
    const tasks = await TaskModel.find()
    .skip((Number(req.params.page) - 1) * pageSize)
    .limit(pageSize)
    .exec();
    return res.json({ tasks: tasks });
  } 
  catch (err) {
    console.log("HANDLED ERROR: ", err);
    return res.status(500).json({ message: "error happend" });
  }
  };




export {
  
  CREATE_TASK,
  GET_ALL_TASKS,
  GET_TASK_BY_ID,
  DELETE_TASK_BY_ID,
  UPDATE_TASK_BY_ID,
  //GET_TASKS_BY_RAITING,
  GET_TASKS_LIMITED,
  GET_PAGINATED_TASKS
}
