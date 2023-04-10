package com.genspark.HVG_Spring.SpringInterface.Service;

import com.genspark.HVG_Spring.SpringInterface.Dao.ScoreDao;
import com.genspark.HVG_Spring.SpringInterface.Entity.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceImpl implements ScoreService{

    @Autowired
    private ScoreDao scores;

    @Override
    public List<Score> getAllScores() {
        return this.scores.findByOrderByScoreDesc();
    }

    @Override
    public List<Score> getTopScores() {
        return this.scores.findFirst3ByOrderByScoreDesc();
    }

    @Override
    public Score addScore(Score score) {
        return this.scores.save(score);
    }

    @Override
    public Score updateScore(Score score) {
        return this.scores.save(score);
    }

    @Override
    public String deleteScoreById(int score_id) {
        this.scores.deleteById(score_id);
        return "Deleted Score Successfully";
    }
}
