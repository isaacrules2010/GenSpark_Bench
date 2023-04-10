package com.genspark.HVG_Spring.SpringInterface.Service;

import com.genspark.HVG_Spring.SpringInterface.Entity.Score;

import java.util.List;

public interface ScoreService {
    List<Score> getAllScores();
    List<Score> getTopScores();
    Score addScore(Score score);
    Score updateScore(Score score);
    String deleteScoreById(int score_id);
}
