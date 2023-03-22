package com.genspark.HVG_Spring.SpringInterface.Entity;


import jakarta.persistence.*;

@Entity
@Table(name="tbl_saves")
public class GameSave {
    @Id
    @Column(name="save_id")
    @GeneratedValue
    String SaveId;
    int GoblinCount;
    String GoblinLocations;
    String HumanLocation;
    int HumanStr;
    int HumanDex;
    int HumanCon;
    int HumanHp_Current;
    String HumanEquip;

    public GameSave(){

    }
    public String getSaveId() {
        return SaveId;
    }

    public void setSaveId(String saveId) {
        SaveId = saveId;
    }

    public int getGoblinCount() {
        return GoblinCount;
    }

    public void setGoblinCount(int goblinCount) {
        GoblinCount = goblinCount;
    }

    public String getGoblinLocations() {
        return GoblinLocations;
    }

    public void setGoblinLocations(String goblinLocations) {
        GoblinLocations = goblinLocations;
    }

    public String getHumanLocation() {
        return HumanLocation;
    }

    public void setHumanLocation(String humanLocation) {
        HumanLocation = humanLocation;
    }

    public int getHumanStr() {
        return HumanStr;
    }

    public void setHumanStr(int humanStr) {
        HumanStr = humanStr;
    }

    public int getHumanDex() {
        return HumanDex;
    }

    public void setHumanDex(int humanDex) {
        HumanDex = humanDex;
    }

    public int getHumanCon() {
        return HumanCon;
    }

    public void setHumanCon(int humanCon) {
        HumanCon = humanCon;
    }

    public int getHumanHp_Current() {
        return HumanHp_Current;
    }

    public void setHumanHp_Current(int humanHp_Current) {
        HumanHp_Current = humanHp_Current;
    }

    public String getHumanEquip() {
        return HumanEquip;
    }

    public void setHumanEquip(String humanEquip) {
        HumanEquip = humanEquip;
    }
}
