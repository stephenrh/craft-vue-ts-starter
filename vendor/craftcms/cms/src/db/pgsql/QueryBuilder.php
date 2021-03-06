<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\db\pgsql;

use craft\db\Connection;
use yii\db\ExpressionInterface;
use yii\db\Query;

/**
 * @inheritdoc
 * @property Connection $db Connection the DB connection that this command is associated with.
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.0
 */
class QueryBuilder extends \yii\db\pgsql\QueryBuilder
{
    /**
     * Builds a SQL statement for dropping a DB table if it exists.
     *
     * @param string $table The table to be dropped. The name will be properly quoted by the method.
     * @return string The SQL statement for dropping a DB table.
     */
    public function dropTableIfExists(string $table): string
    {
        return 'DROP TABLE IF EXISTS ' . $this->db->quoteTableName($table);
    }

    /**
     * Builds a SQL statement for renaming a DB sequence.
     *
     * @param string $oldName the sequence to be renamed. The name will be properly quoted by the method.
     * @param string $newName the new sequence name. The name will be properly quoted by the method.
     * @return string the SQL statement for renaming a DB table.
     */
    public function renameSequence(string $oldName, string $newName): string
    {
        return 'ALTER SEQUENCE ' . $this->db->quoteTableName($oldName) . ' RENAME TO ' . $this->db->quoteTableName($newName);
    }

    /**
     * Builds a SQL statement for replacing some text with other text in a given table column.
     *
     * @param string $table The table to be updated.
     * @param string $column The column to be searched.
     * @param string $find The text to be searched for.
     * @param string $replace The replacement text.
     * @param array|string $condition The condition that will be put in the WHERE part. Please
     * refer to [[Query::where()]] on how to specify condition.
     * @param array $params The binding parameters that will be generated by this method.
     * They should be bound to the DB command later.
     * @return string The SQL statement for replacing some text in a given table.
     */
    public function replace(string $table, string $column, string $find, string $replace, $condition, array &$params): string
    {
        $column = $this->db->quoteColumnName($column);

        $findPhName = self::PARAM_PREFIX . count($params);
        $params[$findPhName] = $find;

        $replacePhName = self::PARAM_PREFIX . count($params);
        $params[$replacePhName] = $replace;

        $sql = 'UPDATE ' . $table .
            " SET $column = REPLACE($column, $findPhName, $replacePhName)";

        $where = $this->buildWhere($condition, $params);

        return $where === '' ? $sql : $sql . ' ' . $where;
    }

    /**
     * Builds the SQL expression used to return a DB result in a fixed order.
     *
     * http://stackoverflow.com/a/1310188/684
     *
     * @param string $column The column name that contains the values.
     * @param array $values The column values, in the order in which the rows should be returned in.
     * @return string The SQL expression.
     */
    public function fixedOrder(string $column, array $values): string
    {
        $schema = $this->db->getSchema();
        $sql = 'CASE';
        $key = -1;

        foreach ($values as $key => $value) {
            $sql .= ' WHEN ' . $schema->quoteColumnName($column) . '=' . $schema->quoteValue($value) . ' THEN ' . $schema->quoteValue($key);
        }

        $sql .= ' ELSE ' . $schema->quoteValue($key + 1) . ' END';

        return $sql;
    }

    /**
     * @param array $columns
     * @param array $params the binding parameters to be populated
     * @param bool $distinct
     * @param string $selectOption
     * @return string the SELECT clause built from [[Query::$select]].
     * @todo remove this once Yii 2.0.21 is released
     */
    public function buildSelect($columns, &$params, $distinct = false, $selectOption = null)
    {
        $select = $distinct ? 'SELECT DISTINCT' : 'SELECT';
        if ($selectOption !== null) {
            $select .= ' ' . $selectOption;
        }

        if (empty($columns)) {
            return $select . ' *';
        }

        foreach ($columns as $i => $column) {
            if ($column instanceof ExpressionInterface) {
                if (is_int($i)) {
                    $columns[$i] = $this->buildExpression($column, $params);
                } else {
                    $columns[$i] = $this->buildExpression($column, $params) . ' AS ' . $this->db->quoteColumnName($i);
                }
            } elseif ($column instanceof Query) {
                list($sql, $params) = $this->build($column, $params);
                $columns[$i] = "($sql) AS " . $this->db->quoteColumnName($i);
            } elseif (is_string($i) && $i !== $column) {
                if (strpos($column, '(') === false) {
                    $column = $this->db->quoteColumnName($column);
                }
                $columns[$i] = "$column AS " . $this->db->quoteColumnName($i);
            } elseif (strpos($column, '(') === false) {
                if (preg_match('/^(.*?)(?i:\s+as\s+|\s+)([\w\-_\.]+)$/', $column, $matches)) {
                    $columns[$i] = $this->db->quoteColumnName($matches[1]) . ' AS ' . $this->db->quoteColumnName($matches[2]);
                } else {
                    $columns[$i] = $this->db->quoteColumnName($column);
                }
            }
        }

        return $select . ' ' . implode(', ', $columns);
    }
}
