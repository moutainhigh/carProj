/*
 * Powered By [yihz-framework]
 * Web Site: yihz
 * Since 2018 - 2018
 */

package com.yi.admin.web.order.controller;

import javax.annotation.Resource;

import com.yi.core.order.domain.bo.ExpressTemplateBo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yi.core.order.domain.entity.ExpressTemplate;
import com.yi.core.order.domain.vo.ExpressTemplateListVo;
import com.yi.core.order.domain.vo.ExpressTemplateVo;
import com.yi.core.order.service.IExpressTemplateService;
import com.yihz.common.exception.BusinessException;
import com.yihz.common.json.RestResult;
import com.yihz.common.persistence.Pagination;
import com.yihz.common.utils.web.RestUtils;

import java.util.List;

/**
 * 快递模板
 * 
 * @author lemosen
 * @version 1.0
 * @since 1.0
 **/
@RestController
@RequestMapping(value = "/expressTemplate")
public class ExpressTemplateController {

	private final Logger LOG = LoggerFactory.getLogger(ExpressTemplateController.class);

	@Resource
	private IExpressTemplateService expressTemplateService;

	/**
	 * 分页查询
	 */
	@RequestMapping(value = "query", method = RequestMethod.POST)
	public Page<ExpressTemplateListVo> queryExpressTemplate(@RequestBody Pagination<ExpressTemplate> query) {
		Page<ExpressTemplateListVo> page = expressTemplateService.queryListVo(query);
		return page;
	}

	/**
	 * 查看对象
	 **/
	@RequestMapping(value = "getById", method = RequestMethod.GET)
	public RestResult viewExpressTemplate(@RequestParam("id") int expressTemplateId) {
		try {
			ExpressTemplateVo expressTemplate = expressTemplateService.getExpressTemplateVoById(expressTemplateId);
			return RestUtils.successWhenNotNull(expressTemplate);
		} catch (BusinessException ex) {
			LOG.error("get ExpressTemplate failure : id=expressTemplateId", ex);
			return RestUtils.error("get ExpressTemplate failure : " + ex.getMessage());
		}
	}

	/**
	 * 保存新增对象
	 **/
	@RequestMapping(value = "add", method = RequestMethod.POST)
	public RestResult addExpressTemplate(@RequestBody List<ExpressTemplateBo> expressTemplate) {
		try {
			List<ExpressTemplateListVo> dbExpressTemplate = expressTemplateService.addExpressTemplate(expressTemplate,
					null);
			return RestUtils.successWhenNotNull(dbExpressTemplate);
		} catch (BusinessException ex) {
			LOG.error("add ExpressTemplate failure : expressTemplate", expressTemplate, ex);
			return RestUtils.error("add ExpressTemplate failure : " + ex.getMessage());
		}
	}

	/**
	 * 保存更新对象
	 **/
	@RequestMapping(value = "update", method = RequestMethod.POST)
	public RestResult updateExpressTemplate(@RequestBody ExpressTemplate expressTemplate) {
		try {
			ExpressTemplateVo dbExpressTemplate = expressTemplateService.updateExpressTemplate(expressTemplate);
			return RestUtils.successWhenNotNull(dbExpressTemplate);
		} catch (BusinessException ex) {
			LOG.error("update ExpressTemplate failure : expressTemplate", expressTemplate, ex);
			return RestUtils.error("update ExpressTemplate failure : " + ex.getMessage());
		}
	}

	/**
	 * 删除对象
	 **/
	@RequestMapping(value = "removeById", method = RequestMethod.GET)
	public RestResult removeExpressTemplateById(@RequestParam("id") int expressTemplateId) {
		try {
			expressTemplateService.removeExpressTemplateById(expressTemplateId);
			return RestUtils.success(true);
		} catch (Exception ex) {
			LOG.error("remove ExpressTemplate failure : id=expressTemplateId", ex);
			return RestUtils.error("remove ExpressTemplate failure : " + ex.getMessage());
		}
	}
}