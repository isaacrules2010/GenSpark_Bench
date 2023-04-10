package com.genspark.HVG_Spring.SpringInterface.Dao;

import com.genspark.HVG_Spring.SpringInterface.Entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoreDao extends JpaRepository<Score, Integer> {
    List<Score> findFirst3ByOrderByScoreDesc();
    List<Score> findByOrderByScoreDesc();
}
