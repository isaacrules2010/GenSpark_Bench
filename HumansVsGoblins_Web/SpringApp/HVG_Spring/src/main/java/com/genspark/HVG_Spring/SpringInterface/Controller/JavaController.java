package com.genspark.HVG_Spring.SpringInterface.Controller;

import com.genspark.HVG_Spring.SpringInterface.Entity.Score;
import com.genspark.HVG_Spring.SpringInterface.Service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class JavaController {
   @Autowired
    private ScoreService scores;

   //just something for the empty request
   @GetMapping("/")
    public String home(){
       return "<HTML><h1>Scores</h1></HTML>";
   }

   @GetMapping("/scores")
    public List<Score> getScores(){
       return this.scores.getAllScores();
   }

   @GetMapping("/scores/top")
   public List<Score> getTopScores(){
       return this.scores.getTopScores();
   }

   @PostMapping("/scores")
    public Score addScore(@RequestBody Score score) {
       return this.scores.addScore(score);
   }

   @PutMapping("/scores")
    public Score updateScore(@RequestBody Score score){
       return this.scores.updateScore(score);
   }

   @DeleteMapping("/scores/{id}")
    public String deleteScoreById(@PathVariable String id){
       return this.scores.deleteScoreById(Integer.parseInt(id));
   }
}
