package com.yi.core.basic.domain.vo;/*
									* Powered By [yihz-framework]
									* Web Site: yihz
									* Since 2018 - 2018
									*/

import java.util.Date;

import javax.validation.constraints.Max;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.yi.core.basic.domain.simple.MessageSimple;
import com.yi.core.member.domain.simple.MemberSimple;
import com.yihz.common.convert.domain.VoDomain;
import com.yihz.common.json.deserializer.JsonTimestampDeserializer;
import com.yihz.common.json.serializer.JsonTimestampSerializer;

/**
 * *
 *
 * @author lemosen
 * @version 1.0
 * @since 1.0
 */
public class MessageReadVo extends VoDomain implements java.io.Serializable {

	private static final long serialVersionUID = 1L;

	// columns START
	/**
	 * 消息阅读ID
	 */
	@Max(9999999999L)
	private int id;
	/**
	 * GUID
	 */
	@Length(max = 32)
	private String guid;
	/**
	 * 消息（message表ID）
	 */
	private MessageSimple message;
	/**
	 * 会员（member表ID）
	 */
	private MemberSimple member;
	/**
	 * 阅读时间
	 */
	@JsonDeserialize(using = JsonTimestampDeserializer.class)
	@JsonSerialize(using = JsonTimestampSerializer.class)
	private Date readTime;
	// columns END

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

	public MessageSimple getMessage() {
		return message;
	}

	public void setMessage(MessageSimple message) {
		this.message = message;
	}

	public MemberSimple getMember() {
		return member;
	}

	public void setMember(MemberSimple member) {
		this.member = member;
	}

	public Date getReadTime() {
		return this.readTime;
	}

	public void setReadTime(Date readTime) {
		this.readTime = readTime;
	}

}