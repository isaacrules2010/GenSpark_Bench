package com.genspark.HVG_Spring.SpringInterface.Controller;

import com.genspark.HVG_Spring.SpringInterface.Entity.GameSave;
import com.genspark.HVG_Spring.SpringInterface.Service.SaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JavaController {
    @Autowired
    SaveService saves;

    @GetMapping()
    public String home(){
        return "<h1>Hello World!</h1>";
    }

    @GetMapping("/save")
    public GameSave getSave(@RequestBody int id){
        return this.saves.getSaveById(id);
    }

    @PostMapping("/save")
    public String addSave(@RequestBody GameSave save){
        return this.saves.saveGame(save);
    }
}
