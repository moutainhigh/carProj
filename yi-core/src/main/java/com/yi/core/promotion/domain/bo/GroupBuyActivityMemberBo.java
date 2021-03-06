/*
 * Powered By [yihz-framework]
 * Web Site: yihz
 * Since 2018 - 2018
 */

package com.yi.core.promotion.domain.bo;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import com.yihz.common.convert.domain.BoDomain;

/**
 * 团购活动成员
 *
 * @author yihz
 * @version 1.0
 * @since 1.0
 */
public class GroupBuyActivityMemberBo extends BoDomain {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// columns START
	/**
	 *
	 */
	@Max(9999999999L)
	private int id;
	/**
	 *
	 */
	@Length(max = 32)
	private String guid;
	/**
	 * 活动编号
	 */
	@NotNull
	private GroupBuyActivityBo groupBuyActivity;
	/**
	 * 会员类型:全部会员,等级会员
	 */
	@NotNull
	@Max(127)
	private int memberType;
	/**
	 * 会员级别:普通会员,Vip会员...
	 */
	@NotBlank
	@Length(max = 32)
	private String memberLevel;
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

	public GroupBuyActivityBo getGroupBuyActivity() {
		return groupBuyActivity;
	}

	public void setGroupBuyActivity(GroupBuyActivityBo groupBuyActivity) {
		this.groupBuyActivity = groupBuyActivity;
	}

	public int getMemberType() {
		return this.memberType;
	}

	public void setMemberType(int memberType) {
		this.memberType = memberType;
	}

	public String getMemberLevel() {
		return this.memberLevel;
	}

	public void setMemberLevel(String memberLevel) {
		this.memberLevel = memberLevel;
	}

}