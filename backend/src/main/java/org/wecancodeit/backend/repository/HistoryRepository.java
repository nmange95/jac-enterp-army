package org.wecancodeit.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.backend.model.HistoryModel;

public interface HistoryRepository extends CrudRepository<HistoryModel, Long> {

}
