/*
 * Powered By [yihz-framework]
 * Web Site: yihz
 * Since 2018 - 2018
 */

package com.yi.admin.web.promotion.controller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yi.core.promotion.domain.bo.GroupBuyActivityRuleBo;
import com.yi.core.promotion.domain.entity.GroupBuyActivityRule;
import com.yi.core.promotion.domain.listVo.GroupBuyActivityRuleListVo;
import com.yi.core.promotion.domain.vo.GroupBuyActivityRuleVo;
import com.yi.core.promotion.service.IGroupBuyActivityRuleService;
import com.yihz.common.exception.BusinessException;
import com.yihz.common.json.RestResult;
import com.yihz.common.persistence.Pagination;
import com.yihz.common.utils.web.RestUtils;

/**
 *
 * @author yihz
 * @version 1.0
 * @since 1.0
 **/
@RestController
@RequestMapping(value = "/groupBuyActivityRule")
public class GroupBuyActivityRuleController {

	private final Logger LOG = LoggerFactory.getLogger(GroupBuyActivityRuleController.class);

	@Resource
	private IGroupBuyActivityRuleService groupBuyActivityRuleService;

	/**
	 * 分页查询
	 */
	@RequestMapping(value = "query", method = RequestMethod.POST)
	public Page<GroupBuyActivityRuleListVo> queryGroupBuyActivityRule(@RequestBody Pagination<GroupBuyActivityRule> query) {
		Page<GroupBuyActivityRuleListVo> page = groupBuyActivityRuleService.queryListVo(query);
		return page;
	}

	/**
	 * 保存新增对象
	 **/
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public RestResult addGroupBuyActivityRule(@RequestBody GroupBuyActivityRuleBo groupBuyActivityRuleBo) {
		try {
			GroupBuyActivityRuleListVo groupBuyActivityRuleListVo = groupBuyActivityRuleService.addGroupBuyActivityRule(groupBuyActivityRuleBo);
			return RestUtils.successWhenNotNull(groupBuyActivityRuleListVo);
		} catch (BusinessException ex) {
			LOG.error("add GroupBuyActivityRule failure : groupBuyActivityRuleBo", groupBuyActivityRuleBo, ex);
			return RestUtils.error("add GroupBuyActivityRule failure : " + ex.getMessage());
		}
	}

	/**
	 * 保存更新对象
	 **/
	@RequestMapping(value = "update", method = RequestMethod.POST)
	public RestResult updateGroupBuyActivityRule(@RequestBody GroupBuyActivityRuleBo groupBuyActivityRuleBo) {
		try {
			GroupBuyActivityRuleListVo groupBuyActivityRuleListVo = groupBuyActivityRuleService.updateGroupBuyActivityRule(groupBuyActivityRuleBo);
			return RestUtils.successWhenNotNull(groupBuyActivityRuleListVo);
		} catch (BusinessException ex) {
			LOG.error("update GroupBuyActivityRule failure : groupBuyActivityRuleBo", groupBuyActivityRuleBo, ex);
			return RestUtils.error("update GroupBuyActivityRule failure : " + ex.getMessage());
		}
	}

	/**
	 * 删除对象
	 **/
	@RequestMapping(value = "removeById", method = RequestMethod.GET)
	public RestResult removeGroupBuyActivityRuleById(@RequestParam("id") int groupBuyActivityRuleId) {
		try {
			groupBuyActivityRuleService.removeGroupBuyActivityRuleById(groupBuyActivityRuleId);
			return RestUtils.success(true);
		} catch (Exception ex) {
			LOG.error("remove GroupBuyActivityRule failure : id=groupBuyActivityRuleId", ex);
			return RestUtils.error("remove GroupBuyActivityRule failure : " + ex.getMessage());
		}
	}

	/**
	 * 获取编辑对象
	 **/
	@RequestMapping(value = "getBoById", method = RequestMethod.GET)
	public RestResult getGroupBuyActivityRuleBoById(@RequestParam("id") int groupBuyActivityRuleId) {
		try {
			GroupBuyActivityRuleBo groupBuyActivityRuleBo = groupBuyActivityRuleService.getBoById(groupBuyActivityRuleId);
			return RestUtils.successWhenNotNull(groupBuyActivityRuleBo);
		} catch (BusinessException ex) {
			LOG.error("get GroupBuyActivityRule failure : id=groupBuyActivityRuleId", ex);
			return RestUtils.error("get GroupBuyActivityRule failure : " + ex.getMessage());
		}
	}

	/**
	 * 查看对象详情
	 **/
	@RequestMapping(value = "getVoById", method = RequestMethod.GET)
	public RestResult getGroupBuyActivityRuleVoById(@RequestParam("id") int groupBuyActivityRuleId) {
		try {
			GroupBuyActivityRuleVo groupBuyActivityRuleVo = groupBuyActivityRuleService.getVoById(groupBuyActivityRuleId);
			return RestUtils.successWhenNotNull(groupBuyActivityRuleVo);
		} catch (BusinessException ex) {
			LOG.error("get GroupBuyActivityRule failure : id=groupBuyActivityRuleId", ex);
			return RestUtils.error("get GroupBuyActivityRule failure : " + ex.getMessage());
		}
	}
}