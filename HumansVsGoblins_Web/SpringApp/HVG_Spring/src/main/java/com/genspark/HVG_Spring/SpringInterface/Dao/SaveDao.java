package com.genspark.HVG_Spring.SpringInterface.Dao;

import com.genspark.HVG_Spring.SpringInterface.Entity.GameSave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaveDao extends JpaRepository<GameSave, Integer> {

}
