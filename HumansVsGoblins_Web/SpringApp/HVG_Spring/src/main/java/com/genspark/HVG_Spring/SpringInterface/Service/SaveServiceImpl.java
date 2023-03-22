package com.genspark.HVG_Spring.SpringInterface.Service;

import com.genspark.HVG_Spring.SpringInterface.Dao.SaveDao;
import com.genspark.HVG_Spring.SpringInterface.Entity.GameSave;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class SaveServiceImpl implements SaveService{

    @Autowired
    private SaveDao saves;

    @Override
    public List<GameSave> getAllSaves() {
        return this.saves.findAll();
    }

    @Override
    public GameSave getSaveById(int id) {
        Optional<GameSave> g = this.saves.findById(id);
        GameSave save = null;
        if(g.isPresent()){
            save = g.get();
        }
        else{
            throw new RuntimeException("Game Save not found with id :: " + id);
        }
        return save;
    }

    @Override
    public String saveGame(GameSave newSave) {
        List<GameSave> before = this.saves.findAll();
        this.saves.save(newSave);
        List<GameSave> after = this.saves.findAll();
        if(before.size() < after.size()){
            return "Game Saved Successfully! Your save id is :: " + newSave.getSaveId();
        }
        else{
            return "Failed to save game.";
        }
    }
}
