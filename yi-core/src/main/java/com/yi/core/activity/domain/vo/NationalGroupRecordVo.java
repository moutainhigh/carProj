/*
 * Powered By [yihz-framework]
 * Web Site: yihz
 * Since 2018 - 2018
 */


package com.yi.core.activity.domain.vo;

import java.io.*;
import java.net.*;
import java.util.*;


import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.yi.core.activity.domain.simple.NationalGroupMemberSimple;
import com.yi.core.activity.domain.simple.NationalGroupSimple;
import com.yi.core.member.domain.simple.MemberSimple;
import com.yihz.common.json.serializer.JsonTimestampSerializer;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.Length;
import javax.validation.constraints.NotBlank;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.*;

import static javax.persistence.GenerationType.IDENTITY;

import com.yihz.common.convert.domain.VoDomain;

/**
 * *
 *
 * @author lemosen
 * @version 1.0
 * @since 1.0
 */
@Deprecated
public class NationalGroupRecordVo extends VoDomain implements java.io.Serializable {

    private static final long serialVersionUID = 1L;


    //columns START
    /**
     * 全国拼团记录ID
     */
    @Max(9999999999L)
    private int id;
    /**
     * GUID
     */
    @Length(max = 32)
    private String guid;
    /**
     * 全国拼团（national_group表ID）
     */
    @NotNull
    private NationalGroupSimple nationalGroup;
    /**
     * 团编号
     */
    @NotBlank
    @Length(max = 127)
    private String groupCode;
    /**
     * 团长（member表ID）
     */
    @NotNull
    private MemberSimple member;
    /**
     * 成团人数
     */
    @NotNull
    @Max(9999999999L)
    private int groupPeople;
    /**
     * 参团人数
     */
    @NotNull
    @Max(9999999999L)
    private int joinPeople;
    /**
     * 开团时间
     */
    @JsonSerialize(using = JsonTimestampSerializer.class)
    private Date openTime;
    /**
     * 收货人
     */
    @Length(max = 16)
    private String consignee;
    /**
     * 收货人电话
     */
    @Length(max = 16)
    private String consigneePhone;
    /**
     * 收货人地址
     */
    @Length(max = 127)
    private String consigneeAddr;
    /**
     * 状态（1等待开团2开团成功3开团失败）
     */
    @NotNull
    @Max(127)
    private int state;
    /**
     * 创建时间
     */
    @JsonSerialize(using = JsonTimestampSerializer.class)
    private Date createTime;
    /**
     * 删除（0否1是）
     */
    @NotNull
    @Max(127)
    private int deleted;

    /**
     * 是否支付 0否 1是
     */
    @NotNull
    @Max(127)
    private int pay;

    /**
     * 删除时间
     */
    @JsonSerialize(using = JsonTimestampSerializer.class)
    private Date delTime;
    //columns END

    /**
     * 参团人数
     */
    private Set<NationalGroupMemberSimple> nationalGroupMembers;


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGuid() {
        return this.guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }


    public String getGroupCode() {
        return this.groupCode;
    }

    public void setGroupCode(String groupCode) {
        this.groupCode = groupCode;
    }

    public NationalGroupSimple getNationalGroup() {
        return nationalGroup;
    }

    public void setNationalGroup(NationalGroupSimple nationalGroup) {
        this.nationalGroup = nationalGroup;
    }

    public MemberSimple getMember() {
        return member;
    }

    public void setMember(MemberSimple member) {
        this.member = member;
    }

    public int getGroupPeople() {
        return this.groupPeople;
    }

    public void setGroupPeople(int groupPeople) {
        this.groupPeople = groupPeople;
    }

    public int getJoinPeople() {
        return this.joinPeople;
    }

    public void setJoinPeople(int joinPeople) {
        this.joinPeople = joinPeople;
    }

    public Date getOpenTime() {
        return this.openTime;
    }

    public void setOpenTime(Date openTime) {
        this.openTime = openTime;
    }

    public String getConsignee() {
        return this.consignee;
    }

    public void setConsignee(String consignee) {
        this.consignee = consignee;
    }

    public String getConsigneePhone() {
        return this.consigneePhone;
    }

    public void setConsigneePhone(String consigneePhone) {
        this.consigneePhone = consigneePhone;
    }

    public String getConsigneeAddr() {
        return this.consigneeAddr;
    }

    public void setConsigneeAddr(String consigneeAddr) {
        this.consigneeAddr = consigneeAddr;
    }

    public int getState() {
        return this.state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public Date getCreateTime() {
        return this.createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public int getDeleted() {
        return this.deleted;
    }

    public void setDeleted(int deleted) {
        this.deleted = deleted;
    }

    public Date getDelTime() {
        return this.delTime;
    }

    public void setDelTime(Date delTime) {
        this.delTime = delTime;
    }

    public int getPay() {
        return pay;
    }

    public void setPay(int pay) {
        pay = pay;
    }

    public Set<NationalGroupMemberSimple> getNationalGroupMembers() {
        return nationalGroupMembers;
    }

    public void setNationalGroupMembers(Set<NationalGroupMemberSimple> nationalGroupMembers) {
        this.nationalGroupMembers = nationalGroupMembers;
    }
}