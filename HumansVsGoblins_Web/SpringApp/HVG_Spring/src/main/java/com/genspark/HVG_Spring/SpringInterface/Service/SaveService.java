package com.genspark.HVG_Spring.SpringInterface.Service;

import com.genspark.HVG_Spring.SpringInterface.Entity.GameSave;

import java.util.List;

public interface SaveService {
    List<GameSave> getAllSaves();
    GameSave getSaveById(int id);
    String saveGame(GameSave newSave);
}
