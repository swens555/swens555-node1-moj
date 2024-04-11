import express from"express";
import {
  
  CREATE_TASK,
  GET_ALL_TASKS,
  GET_TASK_BY_ID,
  UPDATE_TASK_BY_ID,
  DELETE_TASK_BY_ID,
  //GET_TASKS_BY_RAITING,
  GET_TASKS_LIMITED,
  GET_PAGINATED_TASKS
}from"../controllers/task.js";
const router = express.Router();


router.post("/tasks", CREATE_TASK);
router.get("/tasks", GET_ALL_TASKS);
router.get("/tasks/:id", GET_TASK_BY_ID);
router.put("/tasks/:id", UPDATE_TASK_BY_ID);
router.delete("/tasks/:id", DELETE_TASK_BY_ID);
//router.get("/tasksSorted", GET_TASKS_BY_RAITING);
router.get("/tasks/limited",GET_TASKS_LIMITED);
router.get("tasks/pagination/:page",GET_PAGINATED_TASKS)





export default router;
//const tasks=[];



  /*1. Parašyt endpointą kuris leistu atspauzdint concolėje filmo rekomendacijos objektą, filmo rekomendacija susideda iš: id, title, raiting, description, imdbLink. Filmo rekomendacija turi būt atsiųsta per body;
  router.post("/creatTask",  
  //6. Patobulint add movie endpointą, kad jus neleistu pridėti filmo su jau egzistuojančiu id;
  const isTaskExists = tasks.some((t) => t.id ===( task.id));

  if (isTaskExists) {
    return res.status(409).json({ message: "This task already exists" });
  }

  //2. Pamodifikuot endpointą, sugebėtu išsaugoti filmo rekomendaciją į masyvo kintamąjį; // Reiks rekomandaciją supushint;
  tasks.push(task);

  return res.status(201).json({ status: "MovieRecomendation was created"})
});
//4. Parašyt endpointą kuris gražintu visas rekomendacijas išrikiuotas mažėjimo tvarka pagal reitingą;
router.get("/getTasksByRaiting", (req, res)=>{
  const sorted=tasks.sort(function(a, b){return b.raiting - a.raiting});
  return res.json({sorted:sorted});
})
//3. Parašyt endpointą kuris parsiųstu visas išsaugotas rekomendacijas;
router.get("/getTasks", (req, res)=> {
 // 7. Patobulint savo endpointą bei bei jei masyvas yra tuščias - gražinti 200 statusa su žinute "Data not exist".
 if (!tasks.length) {
    return res.json({ status: "recomendations array is empty" });
  }
  
  return res.json({movieRecomendations:movieRecomendations});
});

router.get("/getTaskById/:taskId",  (req, res)=>{
  const task= tasks.find((m) => m.id === Number(req.params.taskId));

  if (!task) {
    return res
      .status(404)
      .json({ message: "recomendation with such an id was not found" });
  }
  return res.json({task:task});
});*/




  