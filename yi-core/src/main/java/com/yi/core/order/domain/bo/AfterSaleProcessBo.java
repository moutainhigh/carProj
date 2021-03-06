/*
 * Powered By [yihz-framework]
 * Web Site: yihz
 * Since 2018 - 2018
 */

package com.yi.core.order.domain.bo;

import java.util.Date;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.yi.core.auth.domain.bo.UserBo;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.yihz.common.convert.domain.BoDomain;
import com.yihz.common.json.deserializer.JsonTimestampDeserializer;

/**
 * 售后处理
 * 
 * @author yihz
 * @version 1.0
 * @since 1.0
 *
 */
public class AfterSaleProcessBo extends BoDomain implements java.io.Serializable {

	private static final long serialVersionUID = 1L;

	// columns START
	/**
	 * 售后处理ID
	 */
	@Max(9999999999L)
	private int id;
	/**
	 * GUID
	 */
	@Length(max = 32)
	private String guid;

	private UserBo user;
	/**
	 * 售后单（after_sale_order表ID）
	 */
	@NotNull
	private AfterSaleOrderBo afterSaleOrder;
	/**
	 * 处理信息
	 */
	@NotBlank
	@Length(max = 16)
	private String processPerson;
	/**
	 * 处理类型（1待审核，2待收货，3待退款，4已完成，5拒绝退货，6拒绝退款）
	 */
	@Max(127)
	private Integer processType;
	/**
	 * 处理信息
	 */
	@NotBlank
	@Length(max = 255)
	private String processInfo;
	/**
	 * 处理时间
	 */
	@NotNull
	@JsonDeserialize(using = JsonTimestampDeserializer.class)
	private Date processDate;
	/**
	 * 备注
	 */
	@Length(max = 127)
	private String remark;
	/**
	 * 创建时间
	 */
	@JsonDeserialize(using = JsonTimestampDeserializer.class)
	private Date createTime;
	/**
	 * 删除（0否1是）
	 */
	@NotNull
	@Max(127)
	private Integer deleted;
	/**
	 * 删除时间
	 */
	@JsonDeserialize(using = JsonTimestampDeserializer.class)
	private Date delTime;
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

	public AfterSaleOrderBo getAfterSaleOrder() {
		return this.afterSaleOrder;
	}

	public void setAfterSaleOrder(AfterSaleOrderBo afterSaleOrder) {
		this.afterSaleOrder = afterSaleOrder;
	}

	public String getProcessPerson() {
		return this.processPerson;
	}

	public void setProcessPerson(String processPerson) {
		this.processPerson = processPerson;
	}

	public Integer getProcessType() {
		return this.processType;
	}

	public void setProcessType(Integer processType) {
		this.processType = processType;
	}

	public String getProcessInfo() {
		return this.processInfo;
	}

	public void setProcessInfo(String processInfo) {
		this.processInfo = processInfo;
	}

	public Date getProcessDate() {
		return this.processDate;
	}

	public void setProcessDate(Date processDate) {
		this.processDate = processDate;
	}

	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Integer getDeleted() {
		return this.deleted;
	}

	public void setDeleted(Integer deleted) {
		this.deleted = deleted;
	}

	public Date getDelTime() {
		return this.delTime;
	}

	public void setDelTime(Date delTime) {
		this.delTime = delTime;
	}

	public UserBo getUser() {
		return user;
	}

	public void setUser(UserBo user) {
		this.user = user;
	}
}